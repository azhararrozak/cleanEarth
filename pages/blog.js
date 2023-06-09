/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
// import Image from 'next/image';

const Blog = () => {
  useEffect(() => {
    $('.filter-item').on('click', function() {
      $('.filter-item').removeClass('active-filter');
      $(this).addClass('active-filter');
      
      const filter = $(this).data('filter');
      if (filter === 'all') {
        $('.post-box').show();
      } else {
        $('.post-box').hide();
        $(`.post-box.${filter}`).show();
      }
    });
  }, []);

  return (
    <div>
      {/* Post filter */}
      <div className="post-filter container">
        <span className="filter-item active-filter" data-filter='all'>All</span>
        <span className="filter-item" data-filter='trending'>Trending</span>
        <span className="filter-item" data-filter='article'>Article</span>
        <span className="filter-item" data-filter='recycle'>Recycle</span>
        <span className="filter-item" data-filter='Innovation'>Innovation</span>
      </div>

      {/* Posts */}
      <section className="post container">
        {/* Post-box-one */}
        <div className="post-box article">
          <img src="/img/post-one.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Article</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-two */}
        <div className="post-box Innovation trending">
          <img src="/img/post-two.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Innovation</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-three */}
        <div className="post-box recycle trending">
          <img src="/img/post-three.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Recycle</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-four */}
        <div className="post-box article">
          <img src="/img/post-four.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Article</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-five */}
        <div className="post-box Innovation">
          <img src="/img/post-five.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Innovation</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-six */}
        <div className="post-box recycle trending">
          <img src="/img/post-six.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Recycle</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-seven */}
        <div className="post-box article trending">
          <img src="/img/post-seven.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Article</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-eight */}
        <div className="post-box Innovation trending">
          <img src="/img/post-eight.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Innovation</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>

        {/* Post-box-nine */}
        <div className="post-box recycle trending">
          <img src="/img/post-nine.jpg" alt="blog-picture" className="post-img" />
          <h2 className="category">Recycle</h2>
          <a href="INIDETAIL" className="post-title">Lorem ipsum dolor sit</a>
          <span className="post-date">11 Feb 2023</span>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus
            deserunt sunt veritatis saepe iste odit perspiciatis at soluta ex, aspernatur voluptatum blanditiis.
            Quod dolor labore accusantium ex cupiditate aperiam.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;