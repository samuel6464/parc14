import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">PARC14</a>

                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Artiste</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Label</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>

                </ul>
            </nav>
        )
    }
}

export { Header };