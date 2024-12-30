import Header from './Header.jsx'
import Cards from './Cards.jsx'
import { data } from './data.js'
import Footer from './Footer.jsx'
import './App.css'
import ButtonWithDatabase from './database.jsx'

function App() {
	const mappedData = data.map((item) => {
		return (
			<Cards key={item.id} item={item} />
		)
	})
	return (
		<div className="App">
			<Header />
			{mappedData}
      <ButtonWithDatabase/>
			<Footer />
		</div>
	);
}

export default App;