import { Table as Tab } from '@mantine/core';

function TableData1({ item }) {
    return (
        <Tab.Tr key={item.id}>
            <Tab.Td>{item.id}</Tab.Td>
            <Tab.Td>{item.totalArea.toFixed(3)}</Tab.Td>
            <Tab.Td>{item.totalYield.toFixed(3)}</Tab.Td>
        </Tab.Tr >
    )
}

export default TableData1;