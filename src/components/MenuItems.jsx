import "./MenuItems.css";

function MenuItems() {
    return(
        <>
            <h2>Menu Items</h2>
            <ul>
                <li>
                    <a 
                        href="index.html"
                        target="_blank"
                    >
                        Home
                    </a>
                </li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About Us</a></li>
            </ul>
        </>
    )
}

export default MenuItems;