---
title: Host Communication 
sidebar_position: 3
---
monoZ:Jet utilizes USB or cascade UART for Host to module communication and comes preconfigured with application firmware that automates complex network and platform communication processes.

### USB mode
monoZ:Jet can be accessed via USB by connecting a USB-C cable between the host and the module. This provides both power and a data channel for monoZ:Jet. When using USB as the communication channel, ensure that the UART cascade pins are not connected.

<div className="card">
    <div className="card__body">
       <div><b>UART Settings</b></div>
       <div className="row">
        <div className="col col--4">BAUD RATE</div>
        <div className="col col--8">115200</div>
       </div>
       <div className="row">
        <div className="col col--4">Data Bits</div>
        <div className="col col--8">8</div>
       </div>
       <div className="row">
        <div className="col col--4">Stop Bits</div>
        <div className="col col--8">1</div>
       </div>
       <div className="row">
        <div className="col col--4">Parity</div>
        <div className="col col--8">None</div>
       </div>
       <div className="row">
        <div className="col col--4">Flow Control</div>
        <div className="col col--8">None</div>
       </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
       <div><b>Power Settings</b></div>
       <div className="row">
        <div className="col col--4">Voltage</div>
        <div className="col col--8">5V DC [4.5V DC ~ 6V DC]</div>
       </div>
       <div className="row">
        <div className="col col--4">Ampere</div>
        <div className="col col--8">max 1A</div>
       </div>
    </div>
</div>

### Cascade UART mode
monoZ:Jet can be accessed via UART by two methods.
<br/>Method 1: Cutoff the optional part of the monoZ:Jet board. This is a permanent switch and it is ideal for space constrained usecases. 
<div className="card">
    <div className="card__body">
    <img className="img-center" src={require('@site/static/img/quickguide2.png').default} />
    </div>
    </div>
 <br/>Method 2: Remove the three resistors shown below to disconnect the communication line between the USB and the processor. In this method monoZ:Jet can be switched back to USB mode by remounting the resistors in their original positions. Meritech strictly disclaims any responsibility for hardware issues, including malfunction of monoZ:Jet caused by removal or reinstallation of resistors.
 <div className="card">
    <div className="card__body">
    <img className="img-center" src={require('@site/static/img/quickguide3.png').default} />
</div>
</div>
Once hardware is prepared, monoZ:Jet can be accessed via UART by connecting p7,p8 of cascade connector J1 to  RX & TX of the host. This enables UART as the data channel for monoZ:Jet. In UART mode, monoZ:Jet can be powered by connecting p1, p2 of connector J2 to 5V DC power input and GND. 

<div className="card">
    <div className="card__body">
        <img src={require('@site/static/img/uart.jpg').default} />
    </div>
</div>

<div className="card">
    <div className="card__body">
       <div><b>UART Settings</b></div>
       <div className="row">
        <div className="col col--4">BAUD RATE</div>
        <div className="col col--8">115200</div>
       </div>
       <div className="row">
        <div className="col col--4">Data Bits</div>
        <div className="col col--8">8</div>
       </div>
       <div className="row">
        <div className="col col--4">Stop Bits</div>
        <div className="col col--8">1</div>
       </div>
       <div className="row">
        <div className="col col--4">Parity</div>
        <div className="col col--8">None</div>
       </div>
       <div className="row">
        <div className="col col--4">Flow Control</div>
        <div className="col col--8">None</div>
       </div>
       <div className="row">
        <div className="col col--4">Pin Ratings</div>
        <div className="col col--8">3.3V, max 10mA</div>
       </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
       <div><b>Power Settings</b></div>
       <div className="row">
        <div className="col col--4">Voltage</div>
        <div className="col col--8">5V DC [4.5V DC ~ 6V DC]</div>
       </div>
       <div className="row">
        <div className="col col--4">Ampere</div>
        <div className="col col--8">max 1A</div>
       </div>
    </div>
</div>

**Caution:**
<br/>i)	Do not power up monoZ:Jet via USB and 5V cascade VBUS pin at the same time. This may cause monoZ:Jet to malfunction. The power source may also face overcurrent and potential damage.
<br/>ii) When in USB mode, the cascade UART pins should remain disconnected from any data source. Transmitting data through the cascade UART while monoZ:Jet is in USB mode may result in signal corruption and monoZ:Jet malfunction.