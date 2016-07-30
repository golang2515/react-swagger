import React from 'react';

export default class Setting extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div className="content">
		    <div className="content-inner">
		        <div className="container">
		            <h2 className="content-sub-heading">Simple Tiles</h2>
		            <div className="tile-wrap">
		                <div className="tile">
		                    <div className="pull-left tile-side">
		                        <div className="avatar avatar-blue avatar-sm">
		                            <span className="icon icon-alarm"></span>
		                        </div>
		                    </div>
		                    <div className="tile-inner">
		                        <span>lorem ipsum dolor sit amet</span>
		                    </div>
		                </div>
		                <div className="tile">
		                    <div className="pull-left tile-side">
		                        <div className="avatar avatar-green avatar-sm">
		                            <span className="icon icon-backup"></span>
		                        </div>
		                    </div>
		                    <div className="tile-inner">
		                        <span>consectetur adipiscing elit</span>
		                    </div>
		                </div>
		                <div className="tile">
		                    <div className="pull-left tile-side">
		                        <div className="avatar avatar-red avatar-sm">
		                            <span className="icon icon-launch"></span>
		                        </div>
		                    </div>
		                    <div className="tile-inner">
		                        <span>sed ornare orci lorem</span>
		                    </div>
		                </div>
		            </div>
		            <h2 className="content-sub-heading">Sortable Tiles</h2>
		            <div className="sortable-list tile-wrap">
		                <div className="sortable-item tile">
		                    <div className="pull-left tile-side">
		                        <span className="icon icon-more-vert sortable-handle"></span>
		                    </div>
		                    <div className="tile-inner">
		                        <span>lorem ipsum dolor sit amet</span>
		                    </div>
		                </div>
		                <div className="sortable-item tile">
		                    <div className="pull-left tile-side">
		                        <span className="icon icon-more-vert sortable-handle"></span>
		                    </div>
		                    <div className="tile-inner">
		                        <span>consectetur adipiscing elit</span>
		                    </div>
		                </div>
		                <div className="sortable-item tile">
		                    <div className="pull-left tile-side">
		                        <span className="icon icon-more-vert sortable-handle"></span>
		                    </div>
		                    <div className="tile-inner">
		                        <span>sed ornare orci lorem</span>
		                    </div>
		                </div>
		            </div>
		            <h2 className="content-sub-heading">Tiles with Actions</h2>
		            <div className="tile-wrap">
		                <div className="tile">
		                    <div className="pull-left tile-side">
		                        <div className="avatar avatar-blue avatar-sm">
		                            <span className="icon icon-alarm"></span>
		                        </div>
		                    </div>
		                    <div className="tile-action">
		                        <ul className="nav nav-list pull-right">
		                            <li>
		                                <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
		                            </li>
		                            <li>
		                                <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
		                            </li>
		                            <li className="dropdown">
		                                <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
		                                <ul className="dropdown-menu">
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
		                                    </li>
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
		                                    </li>
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
		                                    </li>
		                                </ul>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="tile-inner">
		                        <span>lorem ipsum dolor sit amet</span>
		                    </div>
		                </div>
		                <div className="tile">
		                    <div className="pull-left tile-side">
		                        <div className="avatar avatar-green avatar-sm">
		                            <span className="icon icon-backup"></span>
		                        </div>
		                    </div>
		                    <div className="tile-action">
		                        <ul className="nav nav-list pull-right">
		                            <li>
		                                <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
		                            </li>
		                            <li>
		                                <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
		                            </li>
		                            <li className="dropdown">
		                                <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
		                                <ul className="dropdown-menu">
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
		                                    </li>
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
		                                    </li>
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
		                                    </li>
		                                </ul>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="tile-inner">
		                        <span>consectetur adipiscing elit</span>
		                    </div>
		                </div>
		                <div className="tile">
		                    <div className="pull-left tile-side">
		                        <div className="avatar avatar-red avatar-sm">
		                            <span className="icon icon-launch"></span>
		                        </div>
		                    </div>
		                    <div className="tile-action">
		                        <ul className="nav nav-list pull-right">
		                            <li>
		                                <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
		                            </li>
		                            <li>
		                                <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
		                            </li>
		                            <li className="dropdown">
		                                <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
		                                <ul className="dropdown-menu">
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
		                                    </li>
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
		                                    </li>
		                                    <li>
		                                        <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
		                                    </li>
		                                </ul>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="tile-inner">
		                        <span>sed ornare orci lorem</span>
		                    </div>
		                </div>
		            </div>
		            <h2 className="content-sub-heading">Tiles with Collapsible Regions</h2>
		            <div className="tile-wrap">
		                <div className="tile tile-collapse">
		                    <div className="tile-toggle">
		                        <div className="pull-left tile-side">
		                            <div className="avatar avatar-blue avatar-sm">
		                                <span className="icon icon-alarm"></span>
		                            </div>
		                        </div>
		                        <div className="tile-action tile-toggle-false">
		                            <ul className="nav nav-list pull-right">
		                                <li>
		                                    <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
		                                </li>
		                                <li>
		                                    <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
		                                </li>
		                                <li className="dropdown">
		                                    <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
		                                    <ul className="dropdown-menu">
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
		                                        </li>
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
		                                        </li>
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
		                                        </li>
		                                    </ul>
		                                </li>
		                            </ul>
		                        </div>
		                        <div className="tile-inner">
		                            <div className="text-overflow">lorem ipsum dolor sit amet</div>
		                        </div>
		                    </div>
		                    <div className="tile-active-show collapse">
		                        <div className="tile-sub">
		                            <p>Additional information
		                                <br></br><small>Aliquam in pharetra leo. In congue, massa sed elementum dictum, justo quam efficitur risus, in posuere mi orci ultrices diam.</small></p>
		                        </div>
		                        <div className="tile-footer">
		                            <ul className="nav nav-list pull-left">
		                                <li>
		                                    <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
		                                </li>
		                                <li>
		                                    <a data-dismiss="tile" href="javascript:void(0)"><span className="icon icon-close"></span>&nbsp;Cancel</a>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                </div>
		                <div className="tile tile-collapse">
		                    <div className="tile-toggle">
		                        <div className="pull-left tile-side">
		                            <div className="avatar avatar-green avatar-sm">
		                                <span className="icon icon-backup"></span>
		                            </div>
		                        </div>
		                        <div className="tile-action tile-toggle-false">
		                            <ul className="nav nav-list pull-right">
		                                <li>
		                                    <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
		                                </li>
		                                <li>
		                                    <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
		                                </li>
		                                <li className="dropdown">
		                                    <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
		                                    <ul className="dropdown-menu">
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
		                                        </li>
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
		                                        </li>
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
		                                        </li>
		                                    </ul>
		                                </li>
		                            </ul>
		                        </div>
		                        <div className="tile-inner">
		                            <div className="text-overflow">consectetur adipiscing elit</div>
		                        </div>
		                    </div>
		                    <div className="tile-active-show collapse">
		                        <div className="tile-sub">
		                            <p>Additional information
		                                <br></br><small>Aliquam in pharetra leo. In congue, massa sed elementum dictum, justo quam efficitur risus, in posuere mi orci ultrices diam.</small></p>
		                        </div>
		                        <div className="tile-footer">
		                            <ul className="nav nav-list pull-left">
		                                <li>
		                                    <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
		                                </li>
		                                <li>
		                                    <a data-dismiss="tile" href="javascript:void(0)"><span className="icon icon-close"></span>&nbsp;Cancel</a>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                </div>
		                <div className="tile tile-collapse">
		                    <div className="tile-toggle">
		                        <div className="pull-left tile-side">
		                            <div className="avatar avatar-red avatar-sm">
		                                <span className="icon icon-launch"></span>
		                            </div>
		                        </div>
		                        <div className="tile-action tile-toggle-false">
		                            <ul className="nav nav-list pull-right">
		                                <li>
		                                    <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
		                                </li>
		                                <li>
		                                    <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
		                                </li>
		                                <li className="dropdown">
		                                    <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
		                                    <ul className="dropdown-menu">
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
		                                        </li>
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
		                                        </li>
		                                        <li>
		                                            <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
		                                        </li>
		                                    </ul>
		                                </li>
		                            </ul>
		                        </div>
		                        <div className="tile-inner">
		                            <div className="text-overflow">sed ornare orci lorem</div>
		                        </div>
		                    </div>
		                    <div className="tile-active-show collapse">
		                        <div className="tile-sub">
		                            <p>Additional information
		                                <br></br><small>Aliquam in pharetra leo. In congue, massa sed elementum dictum, justo quam efficitur risus, in posuere mi orci ultrices diam.</small></p>
		                        </div>
		                        <div className="tile-footer">
		                            <ul className="nav nav-list pull-left">
		                                <li>
		                                    <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
		                                </li>
		                                <li>
		                                    <a data-dismiss="tile" href="javascript:void(0)"><span className="icon icon-close"></span>&nbsp;Cancel</a>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>

      </div>
    );
  }
}
