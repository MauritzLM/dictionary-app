/* eslint-disable react/prop-types */

function Navbar({ switchTheme, switchFont }) {


    return (
        <>
            <nav>
                <select name="font-select" id="font-select" onChange={e => switchFont(e)}>
                    <option value="san-serif">san-serif</option>
                    <option value="serif">serif</option>
                </select>
                <input type="checkbox" name="theme-switch" id="theme-switch" onChange={switchTheme} />
            </nav>
        </>
    )
}

export default Navbar;