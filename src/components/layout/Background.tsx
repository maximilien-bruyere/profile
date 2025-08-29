const Background = () => {
  return (
    <>
      {/** Couleur du background */}
      <div className="fixed inset-0 bg-slate-950 z-0">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-primary"></div>
      </div>
    </>
  );
};

export default Background;
