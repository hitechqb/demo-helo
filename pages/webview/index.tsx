import {useState} from "react";
import styles from "../../styles/Home.module.css";

function Index() {
    const [url, setURL] = useState("null")
    function handleGetURL() {
        const u = window.location.href
        setURL(u);
    }

    return (
        <>
            <div className={styles.container}>
             <p> The page for check redirect</p>
            <div className={styles.card} style={{wordWrap: "break-word"}}>
                <p>FullURL: {url} </p>
                <button onClick={handleGetURL}>GetFullURL</button>
            </div>
            </div>
        </>
    )
}

export default Index