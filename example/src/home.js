import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div>
    <h2>React Router Tabs</h2>
    <p>Examples can be accessed from the top navigation.</p>
    <p><Link className="inline-link" to="/users">Users</Link> example shows a straight-forward implementation with nested routes.</p>
    <p><Link className="inline-link" to="/posts">Posts</Link> example shows an implementation using a central route config (server-rendered apps might use this).</p>
  </div>
);
