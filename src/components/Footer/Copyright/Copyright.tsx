const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="small-mobile sm:small text-body-primary">
      &copy; {currentYear} Nick Bence. All rights reserved.
    </div>
  );
};

export default Copyright;
