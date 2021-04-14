import React, { Component } from "react";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <dvi className="reacent-posts-heading">Recent Posts</dvi>
          <ul className="recent-posts-posts">
              <li>recent post 0</li>
              <li>recent post 1</li>
              <li>recent post 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
