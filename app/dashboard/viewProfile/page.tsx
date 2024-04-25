import Link from 'next/link';
import Image from 'next/image';
import aka from '@/public/aka.jpg';
import '/viewPorfile.css'


export default function page() {
    return (
          
            <div className="mainPage">
              <div className="header">
                  <div className='gridStart'>
                      <p className='logoHeader'>Noisy</p>
                  </div>
                  <div className='gridCenter'>
                      <div className='searchBox'>
                          
                      </div>
  
                  </div>
                  <div className='gridEnd'>
                      
                      <div className='circle'>
                          <Link href=""><svg className='circle-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>                        
                      </div>
                      <div className='circle'>
                          <Link href="../dashboard/viewProfile"><svg className='circle-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></Link>                        
                      </div>
                      <div className='circle'>
                          <Link href="../dashboard/login"><svg className='circle-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg></Link>    
                      </div>
  
                  </div>
  
              </div>
              
              <div className='content'>
                  <div className='navigationPart'>
                      
                  </div>
                  
                  <div className='contentPart'>
                      <div className='infoProfile'>
                        <Image className='profile-photo' src={aka} alt="a cool image" />
                        <div className='profile-info'>
                            <h1>NAME, SURNAME</h1>
                            <h4>Username</h4>
                            <h4>E - mail</h4>
                        </div>
                      </div>
                      <div className='profile-parts'>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button type="button" className="px-12 py-2 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                Activity
                            </button>
                            <button type="button" className="px-12 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                Posts
                            </button>
                            <button type="button" className="px-12 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                Comments
                            </button>
                            <button type="button" className="px-12 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                Wishlist
                            </button>
                            <button type="button" className="px-12 py-2 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                Edit Profile
                            </button>
                            
                        </div>
                      </div>
                      <div className='selected-part'>
                        <div className='edit-profile'>
                        
                            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-5">
                                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
                                <form>
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-white dark:text-gray-200">Username</label>
                                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" >Email Address</label>
                                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" >Password</label>
                                            <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" >Password Confirmation</label>
                                            <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" >Color</label>
                                            <input id="color" type="color" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" >Select</label>
                                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                <option>Surabaya</option>
                                                <option>Jakarta</option>
                                                <option>Tangerang</option>
                                                <option>Bandung</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" >Range</label>
                                            <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" >Date</label>
                                            <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" >Text Area</label>
                                            <textarea id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white">
                                            Image
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span className="">Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                                                </label>
                                                <p className="pl-1 text-white">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-white">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                                    </div>
                                </form>
                            </section>

                            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
                                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
                                
                                <form>
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200">Username</label>
                                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>

                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>

                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" >Password</label>
                                            <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>

                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" >Password Confirmation</label>
                                            <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                      </div>
                      
                  </div>
                  <div className='categoryPart'>
                        <div className='profile-history'>
                            <h5>TOTAL POINTS</h5>
                            <h4>1071</h4>
                            <h5>FOLLOWERS</h5>
                            <h4>40</h4>
                            <h5>Comments</h5>
                            <h4>131</h4>

                        </div>
                  </div>
              </div>
            </div>
    );
  }