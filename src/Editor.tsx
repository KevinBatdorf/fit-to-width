import {
	store as blockEditorStore,
	useBlockProps as blockProps,
	RichText,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./style.css";
import { useSelect } from "@wordpress/data";
import { useEffect, useRef, useState } from "@wordpress/element";
import { makeFitToWidth, placeCursorAtEnd } from "./helpers.ts";
import type { Attributes } from "./index.tsx";
import { Sidebar } from "./Sidebar.tsx";

type Props = {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
};

export const Editor = ({ attributes, setAttributes }: Props) => {
	const [showOutline, setShowOutline] = useState(false);
	const [show, setShow] = useState(!attributes.content);
	const blockAutoFocus = useRef(true); // Don't focus on load
	// @ts-ignore no type on this
	const { getSelectedBlockClientId } = useSelect(
		(select) => select(blockEditorStore),
		[],
	);
	// We hide stuff when this changes
	const currentBlock = getSelectedBlockClientId();

	const handleShowEditor = () => {
		if (show) return;
		blockAutoFocus.current = false;
		setShow(true);
	};

	useEffect(() => {
		if (!attributes.content) {
			setShowOutline(false);
			return;
		}
		blockAutoFocus.current = false;
		setShow(false);
	}, [currentBlock]);

	useEffect(() => {
		// Only show the editor outline if selected and content
		// exists when selected (avoids pop in)
		setShowOutline(!!attributes.content);
	}, [show]);

	return (
		<>
			<Sidebar attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps()}>
				<RichText
					ref={(node) => {
						if (!show || !node || blockAutoFocus.current) return;
						blockAutoFocus.current = true;
						const el = node as unknown as HTMLElement;
						requestAnimationFrame(() => {
							el.focus();
							placeCursorAtEnd(el);
						});
					}}
					style={{
						display: show ? "block" : "none",
						boxShadow: showOutline
							? "0 0 0 5px var(--wp--preset--color--base, #ffffff), 0 0 0px 6px #1E1E1E"
							: undefined,
					}}
					value={attributes.content}
					placeholder={__("Enter some text...", "fit-to-width")}
					onChange={(content) => setAttributes({ content })}
				/>
				{/* biome-ignore lint/a11y/useSemanticElements: we're inside the editor with unknown button style specificity */}
				<div
					{...blockProps({
						style: {
							cursor: show ? "default" : "text",
							"--ftw-margin": attributes.margin,
							"--ftw-line-height": attributes.lineHeight,
							"--ftw-max-font-size": attributes.maxFontSize,
							"--ftw-base-font-size": attributes.baseFontSize,
						},
					})}
					role="button"
					tabIndex={0}
					onClick={handleShowEditor}
					onKeyDown={(event) => {
						if (event.key !== "Enter") return;
						handleShowEditor();
					}}
				>
					<RichText.Content value={makeFitToWidth(attributes.content || "")} />
				</div>
			</div>
		</>
	);
};
