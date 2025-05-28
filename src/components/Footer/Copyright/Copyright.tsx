import GlobalCopy from '@/copydeck/GlobalCopy';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-small-mobile sm:text-small text-body-primary">
      &copy; {currentYear} {GlobalCopy.copyright}
    </div>
  );
};

export default Copyright;
