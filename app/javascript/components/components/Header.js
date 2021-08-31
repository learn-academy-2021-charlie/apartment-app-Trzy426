import React, {Component} from 'react' 


class Header extends Component {
    render() {
        const { 
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
          } = this.props
        
        return (
        <>
        <h1>this is the header</h1>
            {logged_in && 
          <div>
            <a href={sign_out_route }>Sign out</a>
          </div>
        } 
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign in</a>
          </div>
        }
        </>
        )
 
    }

}
export default Header