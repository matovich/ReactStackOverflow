import React from "react";
import './App.css';

function Question() {
    return (
        <>
            <div className="Question">
                <h3>How do I delete a Git branch locally and remotely?</h3>
                <article dangerouslySetInnerHTML={{ __html: "<p>Failed Attempts to Delete a Remote Branch:</p>\n<pre class=\"lang-bash prettyprint-override\"><code>$ git branch -d remotes/origin/bugfix\nerror: branch 'remotes/origin/bugfix' not found.\n\n$ git branch -d origin/bugfix\nerror: branch 'origin/bugfix' not found.\n\n$ git branch -rd origin/bugfix\nDeleted remote branch origin/bugfix (was 2a14ef7).\n\n$ git push\nEverything up-to-date\n\n$ git pull\nFrom github.com:gituser/gitproject\n\n* [new branch] bugfix -&gt; origin/bugfix\nAlready up-to-date.\n</code></pre>\n<p>How do I properly delete the <code>remotes/origin/bugfix</code> branch both locally and remotely?</p>\n", }}>
                </article>
            </div>
        </>
    )
}

export default Question;