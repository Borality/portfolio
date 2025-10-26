import { Github, Linkedin, Mail } from "lucide-react";
import { SocialIconButton } from "@/components/SocialIconButton";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function Contact() {
	return (
		<div className="justify-items-center py-24 max-w-7xl mx-auto px-4">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2
							id="contact-heading"
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
						>
							Get In Touch
						</h2>
						<p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{`I'm always interested in new opportunities and collaborations.
              Let's connect and discuss how we can work together.`}
						</p>
					</div>
				</div>

				<div className="mx-auto flex max-w-5xl justify-center gap-6 py-12">
					<Card className="w-full max-w-md">
						<CardHeader>
							<CardTitle>{`Let's Work Together`}</CardTitle>
							<CardDescription>
								{`I'm currently available for freelance work and full-time
                opportunities.`}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="pt-4">
								<p className="text-muted-foreground mb-4 text-sm">
									Follow me on social media:
								</p>
								<div className="flex space-x-4">
									<SocialIconButton
										href="https://github.com/Borality"
										ariaLabel="GitHub"
										icon={<Github className="h-4 w-4" />}
									/>
									<SocialIconButton
										href="https://www.linkedin.com/in/charles-trangay/"
										ariaLabel="LinkedIn"
										icon={<Linkedin className="h-4 w-4" />}
									/>
									<SocialIconButton
										href="mailto:charles-trangay-portfolio-contact.overfeed094@aleeas.com"
										ariaLabel="Email"
										icon={<Mail className="h-4 w-4" />}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
