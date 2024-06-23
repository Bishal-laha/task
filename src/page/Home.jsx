import { findAvg, findTable } from "../utils/Features.js";
import { Table1, Table2 } from "../component/Index.js";

function Home() {
    const tableResult = findTable();
    const avgResult = findAvg();

    return (
        <div style={{ width: "70vw", margin: "auto", padding: "5rem 0 3rem 0", textAlign: "center" }}>
            <Table1 res={tableResult} />
            <Table2 res={avgResult} />
        </div>
    )
}

export default Home;