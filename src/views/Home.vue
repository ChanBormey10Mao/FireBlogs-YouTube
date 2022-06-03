<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" v-if="!user" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlog_Post"
      :key="index"
    />
    <!-- blog-card starts -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards row">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
            class="col-sm-12 col-md-6 col-lg-3 col-3"
          />
        </div>
      </div>
    </div>
    <!-- blog-card ends -->
    <!-- update starts -->
    <div class="updates" v-if="!user">
      <div class="container">
        <h2>Never miss a post. Register Your Free Account TODAY!!!!</h2>
        <router-link class="btn btn-secondary" to="#"
          >Register for FireBlogs
          <Arrow class="arrow arrow-light" icon="arrow " />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML,CSS,JavaScript and more.Register today to never missa",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlog_Post: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This isafiller blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This isafiller blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },

    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">
.blog-card-wrap {
  .container {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 50px 25px;
  }
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
  }
  .h2 {
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    margin-right: 50px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 800px) {
      text-align: initial;
      font-size: 40px;
    }
  }
  .btn {
    display: flex;
    font-size: 14px;
    text-decoration: none;
  }
}
</style>
