<template>
  <div class="blog-cards">
    <div v-show="editPost" class="icons">
      <div class="icon">
        <Edit class="icon" icon="edit" />
      </div>
      <div class="icon">
        <Delete class="icon" icon="edit" />
      </div>
    </div>
    <img
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted On: {{ post.blogDate }}</h6>
      <router-link class="link" to="#">
        View The Posts
        <Arrow class="arrow" icon="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
export default {
  name: "BlogCard",
  props: ["post"],
  components: {
    Arrow,
    Edit,
    Delete,
  },
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 0 10px;
  min-height: 420px;
  transform: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .icons {
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 50;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 40%;
      background-color: white;

      &:hover {
        background-color: #303030;
        color: #fff;

        .edit,
        .delete {
          fill: #fff;
        }
      }
      &:nth-child(1) {
        margin-right: 8px;
      }
      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }
  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;
    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }
    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }
    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease all;
    }
    &:hover {
      color: rgba(48, 48, 48, 0.8);
    }
    .arrow {
      width: 10px;
    }
  }
}
</style>
