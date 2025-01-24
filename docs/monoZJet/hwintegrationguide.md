---
title: Hardware Description
sidebar_position: 2
---
### Pinout and Description
The connector pin assignment is as follows. All I/O pins function at max 10mA and 3.3V rating.

#### Connector J1 Pinout
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                <div>
                    <img src={require('@site/static/img/Connector-J1.jpg').default} className="img-center" />
                </div>
            </div>
            <div className="col col--8">
            <table>
                <thead>
                    <tr>
                        <th><b>PIN</b></th>
                        <th><b>PIN No.</b></th>
                        <th><b>DESCRIPTION</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>RSTn</td>
                        <td>p6</td>
                        <td>monoZ:Jet Reset pin</td>
                    </tr>
                    <tr>
                        <td>TX (UART, transmit)</td>
                        <td>p7</td>
                        <td>Host {`<->`} monoZ:Jet comm. UART, baud rate:115200</td>
                    </tr>
                    <tr>
                        <td>RX (UART, receive)</td>
                        <td>p8</td>
                        <td>Host {`<->`} monoZ:Jet comm. UART, baud rate:115200</td>
                    </tr>
                    <tr>
                        <td>{`-`}</td>
                        <td>p9</td>
                        <td>Reserved GPIO</td>
                    </tr>
                    <tr>
                        <td>GND</td>
                        <td>p10</td>
                        <td>Ground connection</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>

#### Connector J2 Pinout
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                <div>
                    <img src={require('@site/static/img/Connector-J2.jpg').default} className="img-center" />
                </div>
            </div>
            <div className="col col--8">
            <table>
                <thead>
                    <tr>
                        <td><b>PIN</b></td>
                        <td><b>PIN No.</b></td>
                        <td><b>DESCRIPTION</b></td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>RSTn</td>
                    <td>p6</td>
                    <td>monoZ:Jet Reset pin</td>
                </tr>
                <tr>
                    <td>VBUS</td>
                    <td>p1</td>
                    <td>5V DC input power supply</td>
                </tr>
                <tr>
                    <td>GND</td>
                    <td>p2</td>
                    <td>Ground connection</td>
                </tr>
                <tr>
                    <td>INT (MOD2HOST_INT)</td>
                    <td>p3</td>
                    <td>monoZ:Jet to host inttrupt pin</td>
                </tr>
                <tr>
                    <td>WKP (HOST2MOD_WKP)</td>
                    <td>p4</td>
                    <td>monoZ:Jet wake up pin</td>
                </tr>
                <tr>
                    <td>GND</td>
                    <td>p5</td>
                    <td>Ground connection</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>

### Mechanical Specifications
The mechanical dimensions of monoZ:Jet is provided in figure 6. A standard tolerance of +-0.05mm shall apply for all dimensions.

<div className="card">
<div className="card__body">
    <img src={require('@site/static/img/Mechanical-Dimensions.jpg').default} className="img-center" />
</div>
</div>