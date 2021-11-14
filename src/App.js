import { PageHeader } from './components/PageHeader/PageHeader';
import { Filter } from './components/Filter/Filter';
import { Table } from './components/Table/Table';
import { Svg } from './components/Svg/Svg'

import './body.css'
import './App.css';

function App() {
  return (
<body>
    <div className="main-wrapper">
        
        <PageHeader/>
        <Filter/>
        <Table/>
        <Svg/>

    </div>
</body>
  );
}

export default App;
