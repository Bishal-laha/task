import { Table as Tab } from '@mantine/core';

function TableData1({ item }) {
    return (
        <Tab.Tr key={item.id}>
            <Tab.Td>{item.id}</Tab.Td>
            <Tab.Td>{item.maxCrop}</Tab.Td>
            <Tab.Td>{item.minCrop.join(", ")}</Tab.Td>
        </Tab.Tr >
    )
}

export default TableData1;