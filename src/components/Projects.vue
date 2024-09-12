<script>
import ProjectCard from './ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          // cover: projectVicorLou,
          cover: "cover",
          title: "Victor Lou Landing Page",
          link: "https://victorlou-landing-page.vercel.app",
          description: "A redesign of the artist's current page. I developed this page to present the artist's latest releases, products and information about future shows and his career.",
          technologies: "ver"
        },
      ],
    };
  },
};
</script>
<template>
  <div v-for="project in projects" :key="project.id">
    <ProjectCard
      :cover="project.cover"
      :title="project.title"
      :link="project.link"
      :description="project.description"
      :technologies="project.technologies"
    />
  </div>
</template>
