import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "404: User navigated to non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] text-[#111111] px-6 select-none">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#D9381E] uppercase">
          ERROR 404 // ROUTE NOT FOUND
        </span>
        <h1 className="font-headline text-5xl sm:text-6xl uppercase tracking-[-0.03em] font-light leading-none">
          PAGE NOT FOUND
        </h1>
        <p className="text-sm font-sans text-[#666666] leading-relaxed">
          The requested path <code className="font-mono text-xs bg-[#F5F5F5] px-2 py-1 text-[#111111]">{location.pathname}</code> does not exist in this deployment.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111111] text-[#FFFFFF] text-[11px] font-mono tracking-[0.22em] uppercase hover:bg-[#D9381E] transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
