import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AllRouts from 'routs/AllRouts';
import MyContext from 'services/MyContext';

const App = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);
  console.log('🚀 ~ selectedDishes:', selectedDishes);
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <MyContext.Provider value={{ selectedDishes, setSelectedDishes }}>
        <AllRouts />
      </MyContext.Provider>
    </>
  );
};

export default App;
