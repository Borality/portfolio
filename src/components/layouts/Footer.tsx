export function Footer() {
  return (
    <footer className="justify-items-center border-t">
          <p className="text-muted-foreground text-center text-sm leading-loose md:py-5 py-2">
            © {new Date().getFullYear()} Charles Trangay. All rights reserved.
          </p>
    </footer>
  );
}
