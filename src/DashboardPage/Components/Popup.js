import React from "react";

const County = ({county_code,counties}) => {
    const index = counties.findIndex(el => el.county_code === county_code);
    return(
        <div>
            {counties[index].county}
        </div>
    )
}


export default County;