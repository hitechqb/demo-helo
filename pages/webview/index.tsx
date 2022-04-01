import {useState} from "react";
import styles from "../../styles/Home.module.css";

function Index() {
    const [url, setURL] = useState("null")
    function handleGetURL() {
        const u = window.location.href + window.location.pathname + window.location.search
        setURL(u);
    }

    return (
        <>
            <div className={styles.container}>
             <p>webview page for check redirect</p>
            <div className={styles.card} style={{wordWrap: "break-word"}}>
                <p>FullURL: {url} </p>
                <button onClick={handleGetURL}>GetURL</button>
                <button onClick={()=> setURL("null")}>Clear</button>
            </div>
            </div>
        </>
    )
}

export default Index