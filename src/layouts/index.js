import React, {Component} from 'react'
import Helmet from 'react-helmet'
import 'tachyons-sass/tachyons.scss'
import config from '../../data/config'
import Footer from '../components/Footer'
import Header from '../components/Header'

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    return (<div>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name='description' content={config.siteDescription} />
      </Helmet>
      <div className='wrapper'>
        <Header />
        <div>{this.props.children}</div>
        <Footer config={config} />
      </div>
    </div>
    )
  }
}

export default TemplateWrapper
