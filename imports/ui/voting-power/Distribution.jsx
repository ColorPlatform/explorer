import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TwentyEighty from './TwentyEightyContainer.js';
import ThirtyFour from './ThirtyFourContainer.js';
import VotingPower from './VotingPowerContainer.js';
import ChainStates from '../components/ChainStatesContainer.js'
import { Helmet } from 'react-helmet';
import i18n from 'meteor/universe:i18n';
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const T = i18n.createComponent();

export default class Distribution extends Component{
    constructor(props){
        super(props);
    };
    state = {
        selected: 'proposals',
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render(){
        const { expanded, selected } = this.state;
        return (
        <div>
            <div id="voting-power-dist" style={{
                            marginLeft: expanded ? 240 : 64,
                            padding: '15px 20px 15px 20px'
                        }}>
            <Helmet>
                <title>Voting Power Distribution on Color Explorer | Color</title>
                <meta name="description" content="We would like to keep track how voting power are distributed over time among validators." />
            </Helmet>
            <Row>
                <Col md={3} xs={12}><h1 className="d-none d-lg-block"><T>votingPower.distribution</T></h1></Col>
                <Col md={9} xs={12} className="text-md-right"><ChainStates /></Col>
            </Row>
            <Row>
                <Col md={6}><TwentyEighty /></Col>
                <Col md={6}><ThirtyFour /></Col>
            </Row>
            <Row>
                <Col>
                    <VotingPower />
                </Col>
            </Row>
        </div>
        <SideNav className="sidenav" onSelect={this.onSelect} onToggle={this.onToggle}>
                <SideNav.Toggle />
                <SideNav.Nav selected={selected} defaultSelected="voting-power-distribution">
                    <NavItem eventKey="dashboard" onClick={ e => this.props.history.push("/") }>
                        <NavIcon>
                            <i className="fa fa-fw fa-th-large" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="validators" onClick={ e => this.props.history.push("/validators") }>
                        <NavIcon>
                            <i className="fa fa-fw fa-signal" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Validators
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="blocks" onClick={ e => this.props.history.push("/blocks") }>
                        <NavIcon>
                            <i className="fa fa-fw fa-cube" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Blocks
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="transactions" onClick={ e => this.props.history.push("/transactions") }>
                        <NavIcon>
                            <i className="fa fa-fw fa-random" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Transactions
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="proposals" onClick={ e => this.props.history.push("/proposals") }>
                        <NavIcon>
                            <i className="fa fa-fw fa-list-ul" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Proposals
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="voting-power-distribution" onClick={ e => this.props.history.push("/voting-power-distribution") }>
                        <NavIcon>
                            <i className="fa fa-fw fa-bolt" style={{ fontSize: '1.75em', color: 'black'}} />
                        </NavIcon>
                        <NavText>
                            Voting Power
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            </div>
            )
    }
}