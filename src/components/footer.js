import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div>Image</div>
        <h3>সম্পর্কেঃ</h3>
        <p>
          প্রোজেক্টটি সম্পূর্ণ সোর্স কোডসহ গিটহাবে রয়েছে। আপনার ভালো লেগে থাকলে
          স্টার দিয়ে আসবেন। আপনার পরামর্শ, মন্তব্য এবং ভুলত্রুটি গিটহাবে ইস্যু
          করে দেওয়ার জন্যে অনুরোধ থাকলো
        </p>
      </div>
      <div className="foot foot-child">
        <div className="child">
          <h3>আপনার জন্যঃ</h3>
          <ul>
            <li>রিঅ্যাক্ট জেএস শিখুন</li>
            <li>আমি মিডিয়ামে</li>
            <li>আমার ব্লগ</li>
            <li>অন্যকিছু শিখুন</li>
          </ul>
        </div>
        <div className="child">
          <h3>রিসোর্সঃ</h3>
          <ul>
            <li>এমডিএন ডকুমেন্টেশন</li>
            <li>ইউডেমি কোর্স</li>
            <li>বই</li>
            <li>অমুক ডকুমেন্টেশন</li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <p>
          <span>❤</span> এর সাথে ডেভেলপ করেছে <a href="#">জুনায়েদ আহমেদ</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
