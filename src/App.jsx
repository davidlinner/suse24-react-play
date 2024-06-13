import './App.css'
import Card from './Card/Card.jsx'
import Chip from "./Chip/Chip.jsx";
import Tooltip from "./Tooltip/Tooltip.jsx";
import MyList from "./MyList/MyList.jsx";
import Counter from "./Counter/Counter.jsx";
import Form from "./Form/Form.jsx";

const myReason = 'whatever';

function App() {
    return <div className={'app'}>
        <h1>Hello world</h1>
        <Chip color={'#0f0'}>My chip</Chip>
        <Tooltip label={'Hover me'}>
            This is the super secret tip.
        </Tooltip> and more
        <Card headline={'My card'} onUserAction={()=> console.log('Yeah')}>
            This is my card text.
        </Card>

        <MyList items={[1,1,2,3,5,8,13]}/>

        <Counter/>

        <h2>Form</h2>
        <Form />

    </div>;
}

export default App
