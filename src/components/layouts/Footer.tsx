export function Footer() {
  return (
    <footer className="py-1 md:py-2"> 
      <div className="mx-auto max-w-5xl px-6">
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Charles Trangay. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
