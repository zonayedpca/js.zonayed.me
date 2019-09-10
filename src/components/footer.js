import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        alignItems: `center`,
        padding: `50px 100px`,
        backgroundColor: `#323330`,
        color: `#fff`,
      }}
    >
      <div style={{ flex: 1 }} className="foot">
        <h3>সম্পর্কেঃ</h3>
        <p>
          প্রোজেক্টটি সম্পূর্ণ সোর্স কোডসহ গিটহাবে রয়েছে। আপনার ভালো লেগে থাকলে
          স্টার দিয়ে আসবেন। আপনার পরামর্শ, মন্তব্য এবং ভুলত্রুটি গিটহাবে ইস্যু
          করে দেওয়ার জন্যে অনুরোধ থাকলো
        </p>
      </div>
      <div style={{ flex: 1, display: `flex` }} className="foot">
        <div>
          <h4>আপনার জন্যঃ</h4>
          <ul>
            <li>রিঅ্যাক্ট জেএস শিখুন</li>
            <li>আমি মিডিয়ামে</li>
            <li>আমার ব্লগ</li>
            <li>অন্যকিছু শিখুন</li>
          </ul>
        </div>
        <div>
          <h4>রিসোর্সঃ</h4>
          <ul>
            <li>এমডিএন ডকুমেন্টেশন</li>
            <li>ইউডেমি কোর্স</li>
            <li>বই</li>
            <li>অমুক ডকুমেন্টেশন</li>
          </ul>
        </div>
      </div>
      <div style={{ flex: 1 }} className="foot">
        <div>Image</div>
        <p>
          <span>❤</span> এর সাথে ডেভেলপ করেছে <a href="#">জুনায়েদ আহমেদ</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
