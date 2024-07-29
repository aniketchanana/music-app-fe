import './App.css';
import SearchSong from './module/Songs/SearchSong';

function App() {
  return (
    <div className='dj-bg flex justify-between p-10'>
      <SearchSong />
      <SearchSong />
    </div>
  );
}

export default App;
