import React from 'react';

class Footer extends React.Component {

    render() {
        return (
           <footer class="page-footer font-small  darken-3">
            
              <div class="container">
            
                <div class="row">
            
                  <div class="col-md-12 py-5">
                    <div class="mb-5 flex-center">
            
                      <a class="fb-ic">
                        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="tw-ic">
                        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="gplus-ic">
                        <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="li-ic">
                        <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="ins-ic">
                        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="pin-ic">
                        <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                      </a>
                    </div>
                  </div>
            
                </div>
            
              </div>
            
              <div class="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
              </div>
            
            </footer> 
        );
    }
}

export default Footer;