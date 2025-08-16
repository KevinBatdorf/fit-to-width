import {
	InspectorControls,
	// @ts-ignore - not sure why this reports as unavailable
	LineHeightControl,
} from "@wordpress/block-editor";
import { BaseControl, FontSizePicker, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import type { Attributes } from "./index.tsx";

type Props = {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
};

export const Sidebar = ({ attributes, setAttributes }: Props) => {
	return (
		<InspectorControls>
			<PanelBody title={__("FTW Settings", "text-domain")}>
				<BaseControl>
					<LineHeightControl
						label={__("Line Height", "text-domain")}
						__next40pxDefaultSize
						__unstableInputWidth="100%"
						value={attributes.lineHeight}
						onChange={(lineHeight: number) =>
							setAttributes({ lineHeight: String(lineHeight) })
						}
					/>
				</BaseControl>
				<BaseControl>
					<FontSizePicker
						__next40pxDefaultSize
						fontSizes={[
							{ name: "Small", size: "0.8em", slug: "small" },
							{ name: "Medium", size: "1em", slug: "medium" },
							{ name: "Large", size: "1.2em", slug: "large" },
							{ name: "Extra Large", size: "2em", slug: "extra" },
							{ name: "Extra Extra Large", size: "5em", slug: "extra-extra" },
						]}
						value={attributes.maxFontSize}
						onChange={(maxFontSize) => setAttributes({ maxFontSize })}
					/>
					<div style={{ marginTop: "10px", color: "#666" }}>
						{__(
							"Press the settings button to reset the font size.",
							"fit-to-width",
						)}
					</div>
				</BaseControl>
			</PanelBody>
		</InspectorControls>
	);
};
