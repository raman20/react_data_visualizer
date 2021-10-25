export default function ParamSelector(props) {
    return (
        <div>
            <ParamViewer
                paramSet={props.paramSet}
                removeParam={props.removeParam}
            />
            <ParamDropdown addParam={props.addParam} />
        </div>
    );
}

function ParamViewer(props) {
    return (
        <div>
            {Array.from(props.paramSet).map((element) => (
                <Param
                    key={element}
                    paramName={element}
                    removeParam={props.removeParam}
                />
            ))}
        </div>
    );
}

function ParamDropdown(props) {
    let addParam = (event) => {
        props.addParam(event.target.value);
        event.target.value = "";
    };

    return (
        <div>
            <form>
                <select onChange={addParam}>
                    <option value="">Select Params</option>
                    <option value="co2">Carbon Dioxide</option>
                    <option value="n2o">Nitrous Oxide</option>
                    <option value="ch4">Methane</option>
                    <option value="nf3">nitrogen triflouride</option>
                    <option value="sf6">Sulphur Hexafluoride</option>
                    <option value="ghghs">All Green House Gas</option>
                    <option value="hfcs_pfcs_mix">Mix of HFCs and PFCs</option>
                </select>
            </form>
        </div>
    );
}

function Param(props) {
    let removeParam = (event) => {
        props.removeParam(event.target.innerText.split(" x")[0]);
    };
    return <span onClick={removeParam}>{props.paramName} x</span>;
}
