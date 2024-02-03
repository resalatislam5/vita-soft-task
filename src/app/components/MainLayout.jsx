function MainLayout({heading, children}) {
    return (
      <main className="container mx-auto py-10">
        <h1 className="text-5xl font-bold text-center pb-10">{heading}</h1>
        {children}
      </main>
    );
}

export default MainLayout;