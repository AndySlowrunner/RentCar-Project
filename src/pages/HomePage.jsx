import Header from "components/Heder/Heder";

const HomePage = () => {
    return (
      <>
        <Header />
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          ♥☻Rent Car Website☻♥
        </div>
      </>
    );
};

export default HomePage;