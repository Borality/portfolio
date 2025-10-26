import type React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

type SocialIconButtonProps = {
	href: string;
	ariaLabel: string;
	icon: React.ReactNode;
	variant?: React.ComponentProps<typeof Button>["variant"];
	size?: React.ComponentProps<typeof Button>["size"];
	className?: string;
	target?: string;
	rel?: string;
	buttonProps?: Omit<
		React.ComponentProps<typeof Button>,
		"variant" | "size" | "className"
	>;
};

export function SocialIconButton({
	href,
	ariaLabel,
	icon,
	variant = "outline",
	size = "icon",
	className,
	target = "_blank",
	rel = "noopener noreferrer",
	buttonProps,
}: SocialIconButtonProps) {
	return (
		<Button
			asChild
			variant={variant}
			size={size}
			className={className}
			{...buttonProps}
		>
			<Link to={href} aria-label={ariaLabel} target={target} rel={rel}>
				{icon}
			</Link>
		</Button>
	);
}
