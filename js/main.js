Vue.component('navbar', {
	props: ['src', 'href'],
	template: `
		<nav class="navbar is-dark is-transparent" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" :href="href">
					<img :src="src"></img>
				</a>
				<div class="navbar-burger burger" v-bind:class="{ 'is-active': isActive }" @click="onToggleBurger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
				<div class="navbar-start">
				</div>
				<div class="navbar-end">
					<slot></slot>
				</div>
			</div>
		</nav>
	`,
	data() {
		return { isActive: false, };
	},
	methods: {
		onToggleBurger() {
			this.isActive = !this.isActive;
		}
	},
});
Vue.component('navlink', {
	props: ['href'],
	template: `
		<a class="navbar-item" :href="href"><slot></slot></a>
	`
});

Vue.component('blog-list', {
	template: `
		<div>
			<blog-post v-for="post in blogList" :key="post.title" :title="post.title" :date="post.date" :time="post.time" :author="post.author" :tags="post.tags">{{ post.body }}</blog-post>
		</div>
	`,
	data() {
		return {
			blogList: [
				{date: '12/15/17', time: '1:00pm', author: 'Billy', title: 'I Hate Joe', body: 'I hate that Joe, Henry is a cool guy.', tags: '',},
				{date: '12/14/17', time: '1:10pm', author: 'Joe', title: 'I Hate Henry', body: 'I hate that Henry, Carl is a cool guy.', tags: '',},
				{date: '12/13/17', time: '1:20pm', author: 'Henry', title: 'I Hate Carl', body: 'I hate that Carl, always ending with emotes.', tags: '',},
				{date: '12/12/17', time: '1:30pm', author: 'Carl', title: 'I Like Potatoes', body: 'I like potatoes. :3', tags: '',},
			]
		};
	}
});

Vue.component('blog-post', {
	props: ['title', 'date', 'time', 'author', 'tags'],
	template: `
		<div class="card block">
			<div class="card-header">
				<div class="card-header-title">{{ title }}</div>
			</div>
			<div class="card-content"><slot></slot></div>
			<div class="card-footer">
				<div class="card-footer-item">by {{ author }}</div>
				<div class="card-footer-item">{{ date }}</div>
				<div class="card-footer-item">{{ time }}</div>
			</div>
		</div>
	`
});

var app = new Vue({
	el: '#app',
})

var main_root = new Vue({
    el: '#mainRoot',
    data: {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec vehicula diam. In hac habitasse platea dictumst. Nunc placerat consectetur est, nec sagittis nulla sollicitudin quis. In hac habitasse platea dictumst. Phasellus vel eros dolor. Donec a lorem ac mauris pellentesque mattis non egestas sem. Phasellus eu risus porttitor, vehicula risus nec, ultrices tellus. Sed molestie ligula ac tellus pellentesque sagittis. Phasellus eu pulvinar leo. Ut sed erat consequat, accumsan justo at, dictum sapien. Donec dictum luctus blandit. Fusce dapibus tortor sed purus egestas, sit amet faucibus mi cursus. Vivamus tempus mauris congue nisl tristique porta. Vivamus blandit imperdiet dui ac pharetra. Donec ligula diam, tristique id feugiat a, tincidunt nec purus. Donec sed varius mauris, nec tincidunt neque.\
        </////////>\
        Praesent nec elit ut lorem ultricies condimentum eu id odio. Sed non pretium massa. Nulla sed dapibus metus. Phasellus a nisi ornare, posuere neque ultrices, dapibus justo. Curabitur eu efficitur felis, sed euismod risus. Nulla luctus ante ac varius elementum. Morbi justo quam, molestie nec nisi aliquam, hendrerit malesuada purus. Nam ante odio, tempor et eleifend gravida, tempor a ligula. Sed maximus lobortis velit, a laoreet mi congue in. Morbi ac volutpat lectus. Nulla eu dui leo. Pellentesque dignissim mauris eu orci rutrum eleifend. Nulla ultricies odio a enim scelerisque, id viverra odio pretium.\
        \
        Etiam nulla orci, vehicula sit amet rutrum ac, sollicitudin vel leo. Sed at augue in tellus semper commodo. Proin eget velit in leo condimentum hendrerit vitae sit amet nibh. Mauris massa lacus, efficitur et enim vitae, sollicitudin aliquam sapien. Suspendisse condimentum pellentesque purus at viverra. Duis interdum semper diam, ut efficitur magna fermentum nec. Duis venenatis nisl et tempus lacinia. Aliquam augue augue, facilisis maximus sodales ut, mattis non tortor. Suspendisse luctus pretium facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec odio eget dolor tristique malesuada vel ac arcu. In vehicula nunc mi, at sollicitudin nulla iaculis eget. Donec eu massa feugiat, ultricies urna quis, dapibus augue. Curabitur vel porttitor nibh.\
        \
        Nam vulputate purus eu nisi condimentum, a lobortis quam molestie. Nunc risus orci, congue a felis sed, hendrerit varius mauris. Cras imperdiet luctus neque nec accumsan. Nunc tincidunt, ligula a aliquam bibendum, mi arcu fringilla ante, sed luctus sapien mi eget enim. Praesent imperdiet nisl eget ipsum commodo dapibus. Donec imperdiet lectus vel fringilla posuere. Mauris posuere ornare ipsum eu faucibus. Aliquam eget eros lorem. Proin interdum quis arcu vel dapibus. Maecenas sit amet interdum leo. Pellentesque pulvinar erat in purus varius, at interdum leo mollis. Curabitur eget tempus nisi. Fusce ut ultricies magna, pellentesque aliquam tortor.\
        \
        In sodales rhoncus volutpat. Sed interdum fermentum vulputate. Donec tincidunt ligula nisl, vitae posuere leo dapibus scelerisque. Integer ullamcorper ex magna, eget porttitor nisi iaculis a. Vivamus vestibulum auctor quam, ut fermentum elit hendrerit nec. Praesent a rhoncus orci, in tincidunt erat. Sed imperdiet ex id tellus vestibulum, ut ullamcorper purus finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
})

var footer_root = new Vue({
    el: '#footerRoot',
    data: {
        externalURLs: [
			{ css_icon: 'github', hyperlink: 'https://github.com/krtan' },
			{ css_icon: 'linkedin', hyperlink: 'https://linkedin.com/in/kevin-tan-b1a40a149/' },
			{ css_icon: 'treehouse', hyperlink: 'https://teamtreehouse.com/krtan' }
		]
    }
})
