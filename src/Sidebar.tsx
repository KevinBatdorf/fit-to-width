import {
	InspectorControls,
	// @ts-ignore - not sure why this reports as unavailable
	LineHeightControl,
} from "@wordpress/block-editor";
import { BaseControl, PanelBody } from "@wordpress/components";
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
			</PanelBody>
		</InspectorControls>
	);
};
