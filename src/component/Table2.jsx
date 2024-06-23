import { Table as Tab } from '@mantine/core';
import { TableData2 } from "./Index";
import { Tab2Caption, Tab2H1, Tab2H2, Tab2H3 } from '../utils/Constants';

function Table2({ res }) {
    return (
        <div style={{ marginTop: "5rem" }}>
            <Tab striped highlightOnHover withTableBorder withColumnBorders captionSide="bottom" border={5} borderColor='black'>
                <caption>{Tab2Caption}</caption>
                <Tab.Thead>
                    <Tab.Tr>
                        <Tab.Th>{Tab2H1}</Tab.Th>
                        <Tab.Th>{Tab2H2}</Tab.Th>
                        <Tab.Th>{Tab2H3}</Tab.Th>
                    </Tab.Tr>
                </Tab.Thead>
                <Tab.Tbody>
                    {res.map((item, id) => <TableData2 key={id} item={item} />)}
                </Tab.Tbody>
            </Tab>
        </div>
    )
}

export default Table2;