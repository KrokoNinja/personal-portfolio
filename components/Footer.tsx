import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Design by Cristian Mihai.
          </div>
        </div>
      </div>
    </footer>
  );
}
