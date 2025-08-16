import { useBlockProps as blockProps, RichText } from "@wordpress/block-editor";
import { type BlockConfiguration, registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json" with { type: "json" };
import "./style.css";
import { __ } from "@wordpress/i18n";
import { Editor } from "./Editor.tsx";
import { makeFitToWidth } from "./helpers.ts";
import { icon } from "./icon.tsx";

export type Attributes = {
	content: string;
	margin?: string;
	lineHeight?: string;
	maxFontSize?: string | number;
};

registerBlockType(metadata as BlockConfiguration<Attributes>, {
	icon,
	category: "text",
	edit: ({ attributes, setAttributes }) => (
		<Editor attributes={attributes} setAttributes={setAttributes} />
	),
	save: ({ attributes }) => {
		if (!attributes.content) return null;
		return (
			<div
				{...blockProps.save({
					style: {
						"--ftw-margin": attributes.margin,
						"--ftw-line-height": attributes.lineHeight,
						"--ftw-max-font-size": attributes.maxFontSize,
					},
				})}
			>
				<RichText.Content value={makeFitToWidth(attributes.content)} />
			</div>
		);
	},
	example: {
		attributes: {
			lineHeight: "1.2",
			// translators: Line breaks are language specific. Check the block preview in the editor.
			content: __(
				"So, get away<br>Another way to feel what you didn't <br>want yourself to know<br>And let yourself go<br>You know you didn't lose your self-control<br>Let's start at the rainbow<br>Turn away<br>Another way to be <br>where you didn't want yourself to go<br>Let yourself go<br>Is that a compromise",
				"fit-to-width",
			),
		},
	},
});
