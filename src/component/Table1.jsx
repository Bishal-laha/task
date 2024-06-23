import { Table as Tab } from '@mantine/core';
import { TableData1 } from "./Index";
import { Tab1Caption, Tab1H1, Tab1H2, Tab1H3 } from '../utils/Constants';

function Table1({ res }) {
    return (
        <Tab striped highlightOnHover withTableBorder withColumnBorders captionSide="top" border={5} borderColor='black'>
            <caption>{Tab1Caption}</caption>
            <Tab.Thead >
                <Tab.Tr>
                    <Tab.Th>{Tab1H1}</Tab.Th>
                    <Tab.Th>{Tab1H2}</Tab.Th>
                    <Tab.Th>{Tab1H3}</Tab.Th>
                </Tab.Tr>
            </Tab.Thead>
            <Tab.Tbody>
                {res.map((item) => <TableData1 key={item.id} item={item} />)}
            </Tab.Tbody>
        </Tab >
    )
}

export default Table1;