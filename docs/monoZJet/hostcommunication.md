---
title: Host Communication 
sidebar_position: 3
---
monoZ:Jet utilizes USB/UART for Host to module communication and comes preconfigured with application firmware that automates complex network and platform communication processes.

### USB Configuration
monoZ:Jet can be accessed via USB by connecting USB-C cable between host and monoZ:Jet module. This enables USB as primary source of power and data channel for monoZ:Jet. Ensure that while using USB as communication channel, the UART cascade pins shouldn’t be connected.

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

### UART Configuration
monoZ:Jet can be accessed via UART by connecting p7,p8 of cascade connector J1 to  RX & TX of the host. This enables UART as the data channel for monoZ:Jet. p1, p2 of connector J2 should be connected to 5V DC power input and GND. Ensure that while using cascade UART, the optional portion of monoZ:Jet must be removed. 

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
