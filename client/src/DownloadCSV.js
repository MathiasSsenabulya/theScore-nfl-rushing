import React from 'react';
import { CSVLink } from "react-csv";

const DownloadCSV = (props) => {
    if (props.data) {
        if (props.data[0]) {
            return (
                <div className="csv-download">
                    <span>
                        <CSVLink
                            data={props.data}
                            filename={"rushing-stats.csv"}
                        >Download CSV
                </CSVLink>
                    </span>
                </div>
            )
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}

export default DownloadCSV;
