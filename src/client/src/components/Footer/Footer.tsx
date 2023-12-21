import React from 'react';
import { APP_NAME, navigation_items } from '../../constants';

export const Footer = () => {
  return (
    // <footer className="max-w-full rounded-lg shadow">
    //   <div className="max-w-full mx-auto p-4 md:py-8">
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <a href="/" className="flex items-center mb-4 sm:mb-0">
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-accent-light">
    //           {APP_NAME}
    //         </span>
    //       </a>
    //       <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white-dark sm:mb-0">
    //         <li>
    //           <a
    //             href="https://business.yell.com/websites-privacy-cookie-policy/"
    //             target="_blank"
    //             className="mr-4 hover:underline md:mr-6 hover:text-accent-light"
    //           >
    //             Privacy & Cookie Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="https://business.yell.com/legal/terms-of-use/"
    //             target="_blank"
    //             className="mr-4 hover:underline md:mr-6 hover:text-accent-light"
    //           >
    //             Terms of Use
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <hr className="my-6 border-white-dark sm:mx-autolg:my-8" />
    //     <span className="block text-sm text-white-dark sm:text-center">
    //       © 2023{' '}
    //       <a href="/" className="hover:underline hover:text-accent-light">
    //         {APP_NAME}
    //       </a>
    //       . All rights reserved.
    //     </span>
    //   </div>
    // </footer>

    <footer className="rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white-dark sm:text-center">
          © 2023{' '}
          <a href="/" className="hover:underline hover:text-accent-dark">
            {APP_NAME}
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white-dark sm:mt-0">
          {navigation_items.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.to} target="_blank" className="mr-4 hover:underline md:mr-6 hover:text-accent-dark">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
