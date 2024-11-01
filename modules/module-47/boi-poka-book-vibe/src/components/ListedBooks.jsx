import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ListedBooks = () => {
    return (
        <div>
            <h1 className='my-8'>Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I've read</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Books I wish 2 read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;